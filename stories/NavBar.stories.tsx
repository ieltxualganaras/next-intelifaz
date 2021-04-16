import React from 'react';

import { Story, Meta } from '@storybook/react';

import Navbar from '../components/navbar/Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
} as Meta;

type Props = {
  classes: any
}

const Template: Story<Props> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
