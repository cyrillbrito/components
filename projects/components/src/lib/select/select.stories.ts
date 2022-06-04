import { Story, Meta } from '@storybook/angular';
import { SelectComponent } from './select.comp';


export default {
  title: 'Select',
  component: SelectComponent,
} as Meta;


const Template: Story<SelectComponent> = (args: SelectComponent) => ({
  props: args,
  // template: '<cb-button>Ola</cb-button>'
});

export const Primary = Template.bind({});
Primary.args = {
  options: [
    { value: 'v1', label: 'Hello1' },
    { value: 'v2', label: 'Hello2' },
    { value: 'v3', label: 'Hello3' },
    { value: 'v4', label: 'Hello4' },
  ]
};
