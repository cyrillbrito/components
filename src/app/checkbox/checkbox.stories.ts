import { Story, Meta } from '@storybook/angular/types-6-0';
import { CheckboxComponent } from './checkbox.comp';


export default {
  title: 'Checkbox',
  component: CheckboxComponent,
} as Meta;


const Template: Story<{ label: string }> = args => ({
  props: args,
  template: '<cb-checkbox>{{ label }}</cb-checkbox>'
});

export const Primary = Template.bind({});
Primary.args = { label: 'Hello' };
