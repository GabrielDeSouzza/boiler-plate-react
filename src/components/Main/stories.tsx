import { Meta, StoryObj } from '@storybook/react/';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
} as Meta;

type Story = StoryObj<typeof Main>;
export const Basic: Story = {
  args: {
    title: 'test',
  },
};
