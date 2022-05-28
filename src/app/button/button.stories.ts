import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.comp';


export default {
  title: 'ButtonComp',
  component: ButtonComponent,
} as Meta;


const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  template: '<cb-button>Ola</cb-button>'
});

export const Primary = Template.bind({});
Primary.args = {
  // primary: true,
  // label: 'Button',
};
