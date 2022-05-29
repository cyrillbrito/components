import { Story, Meta } from '@storybook/angular';
import { ButtonComponent } from './button.comp';


export default {
  title: 'Button',
  component: ButtonComponent,
} as Meta;


const Template: Story<{ label: string, disabled: boolean }> = args => ({
  props: args,
  template: '<cb-button [disabled]="disabled">{{ label }}</cb-button>'
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary button'
};


export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled button',
  disabled: true,
};
