import { Input } from './Input';

export default {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    backgroundColor: '#FF0',
    size: 'medium',
  },
};

export const Secondary = {
  args: {
    backgroundColor: null,
    size: 'medium',
  },
};
