import { FormsModule } from '@angular/forms';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { NumberInputComponent } from './number-input.comp';


export default {
  title: 'Number',
  component: NumberInputComponent,
  decorators: [moduleMetadata({ imports: [FormsModule] })]
} as Meta;


const Template: Story<{ value: number, disabled: boolean }> = (args: { value: number, disabled: boolean }) => ({
  props: args,
  template: '<cb-number-input [ngModel]="value" [disabled]="disabled" required></cb-number-input>'
});

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const PreFilled = Template.bind({});
PreFilled.args = {
  value: 11,
};

export const PreFilledDisabled = Template.bind({});
PreFilledDisabled.args = {
  value: 223,
  disabled: true,
};