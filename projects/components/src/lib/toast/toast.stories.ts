import { Story, Meta } from '@storybook/angular';
import { ToastComponent } from './toast.comp';


export default {
  title: 'Toast',
  component: ToastComponent,
  // decorators: [moduleMetadata({ imports: [BrowserModule, BrowserAnimationsModule] })]
} as Meta;


const Template: Story<{ text: string }> = args => ({
  props: args,
  template: '<cb-toast [text]="text"></cb-toast>'
});

const Template4Service: Story<{ text: string }> = args => ({
  props: args,
  template: '<cb-button (click)="">Open</cb-button>'
});


export const Default = Template.bind({});
Default.args = { text: 'Basic toast' };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   disabled: true,
// };

// export const PreFilled = Template.bind({});
// PreFilled.args = {
//   value: 'Pre filled',
// };

// export const PreFilledDisabled = Template.bind({});
// PreFilledDisabled.args = {
//   value: 'Pre filled disabled',
//   disabled: true,
// };