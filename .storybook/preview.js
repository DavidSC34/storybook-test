const custoimViewPorts ={
  smallUgly:{
    name:'smallUgly',
    styles:{
      width:'360px',
      height:'540px'
    }
  },
  mediumUgly:{
    name:'mediumUgly',
    styles:{
      width:'1024px',
      height:'1200px'
    }
  },
}

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport:{
      viewports:custoimViewPorts,
      defaultViewport:'smallUgly'
    }
  },
  tags: ['autodocs'],
 
};

export default preview;
