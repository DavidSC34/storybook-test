import { expect, userEvent, within } from "@storybook/test";
import {createButton} from "./button";
import { withActions } from '@storybook/addon-actions/decorator';

export default{
    title:'Design System/Atoms/Button',
    parameters: {
      actions: {
        handles: ['mouseover'],
      },
      backgrounds:{
        default:'default',
        values:[
          {
            name:'blackfriday',
            value:'#000000'
          },
          {
            name:'default',
            value:'#FFFFFF'
          },
        ]
      }
    },
    decorators: [
      (story)=>{
        const decorator = document.createElement('div');
        decorator.style.margin = '24px';
        decorator.appendChild(story());
        return decorator;
      },
      withActions
    ],
    tags: ['autodocs'],   
    argTypes:{
      label:{
        name: 'label',
        control:{
          type: 'text'
        }
      },
      style:{
        name: 'style',
        options: ['filled','outline'],
        control:{
          type:'radio'
        }
      },
      size:{
        name: 'size',
        options: ['small','medium','large'],
        control:{
          type:'radio'
        }
      },
      onClick:{
        description:'Event',
        action: 'clicked'
      }
    }
}

const Template = ({label,...args})=>{
  return createButton({label,...args});
}

export const Default = Template.bind({});
Default.args={
    label:'Button',
  
}

Default.play = async({args, canvasElement}) =>{
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole('button'));
  await expect(canvas.getByText('Button')).toBeInTheDocument();
}