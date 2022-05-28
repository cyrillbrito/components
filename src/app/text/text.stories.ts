import { Story, Meta } from '@storybook/angular/types-6-0';
import { TextComponent } from './text.comp';


export default {
  title: 'Text',
  component: TextComponent,
} as Meta;


const Template: Story<TextComponent> = (args: TextComponent) => ({
  props: args,
  // template: '<cb-button>Ola</cb-button>'
});

export const Primary = Template.bind({});
Primary.args = {};
