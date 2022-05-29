import { FormsModule } from '@angular/forms';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { TextInputComponent } from './text-input.comp';


export default {
  title: 'Text',
  component: TextInputComponent,
  decorators: [moduleMetadata({ imports: [FormsModule] })]
} as Meta;


const Template: Story<{ value: string, disabled: boolean }> = args => ({
  props: args,
  template: '<cb-text-input [ngModel]="value" [disabled]="disabled" required></cb-text-input>'
});

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const PreFilled = Template.bind({});
PreFilled.args = {
  value: 'Pre filled',
};

export const PreFilledDisabled = Template.bind({});
PreFilledDisabled.args = {
  value: 'Pre filled disabled',
  disabled: true,
};