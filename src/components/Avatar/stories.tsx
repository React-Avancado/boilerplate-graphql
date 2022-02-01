import { Story, Meta } from '@storybook/react/types-6-0'
import Avatar, { AvatarProps } from '.'

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    name: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta

export const Default: Story<AvatarProps> = (args) => <Avatar {...args} />
