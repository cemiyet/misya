// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MisyaComponent } from './misya.component';

export default {
  title: 'Misya/Elements',
  component: MisyaComponent,
} as Meta;

const Template: Story<MisyaComponent> = (args: MisyaComponent) => ({
  component: MisyaComponent,
  props: args,
});

export const Testing = Template.bind({});
