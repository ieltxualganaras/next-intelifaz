async function fetchAPI(query: any, { variables = {}, preview = false } = {}) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API || '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview
          ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
          : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      }`
    },
    body: JSON.stringify({
      query,
      variables
    })
  });
  const json = await res.json();
  // console.log(json.data);
  if (json.errors) {
    console.log(process.env.NEXT_EXAMPLE_CMS_GCMS_PROJECT_ID);
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getPreviewBlogBySlug(slug = '') {
  const data = await fetchAPI(
    `
    query BlogBySlug($slug: String!, $stage: Stage!) {
      blog(where: {slug: $slug}, stage: $stage) {
        slug
      }
    }`,
    {
      preview: true,
      variables: {
        stage: 'DRAFT',
        slug
      }
    }
  );
  return data.blog;
}

export async function getAllBlogsWithSlug() {
  const data = await fetchAPI(`
    {
      blogs {
        slug
      }
    }
  `);
  return data.blogs;
}

export async function getAllBlogs(preview = false) {
  const data = await fetchAPI(
    `
    {
      blogs(orderBy: date_DESC, first: 20) {
        title
        slug
        date
        coverImage {
          url(transformation: {
            image: {
              resize: {
                fit:crop,
                width:2000,
                height:1000
              }
            }
          })
        }
      }
    }
  `,
    { preview }
  );
  return data.blogs;
}

export async function getBlogBySlug(slug = '', preview = false) {
  const data = await fetchAPI(
    `
    query BlogBySlug($slug: String!, $stage: Stage!) {
      blog(stage: $stage, where: {slug: $slug}) {
        title
        slug
        content
        date
        ogImage: coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
      }
    }
  `,
    {
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
        slug
      }
    }
  );
  return data;
}
