export default () => {
  return {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'image',
          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip3.jpg',
          size: 'full',
          aspectMode: 'cover',
          aspectRatio: '1:1',
          gravity: 'center'
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [],
          position: 'absolute',
          background: {
            type: 'linearGradient',
            angle: '0deg',
            endColor: '#00000000',
            startColor: '#00000099'
          },
          width: '100%',
          height: '40%',
          offsetBottom: '0px',
          offsetStart: '0px',
          offsetEnd: '0px'
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'text',
                      text: 'Brown Grand Hotel',
                      size: 'xl',
                      color: '#ffffff'
                    }
                  ]
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'icon',
                      url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                    },
                    {
                      type: 'icon',
                      url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                    },
                    {
                      type: 'icon',
                      url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                    },
                    {
                      type: 'icon',
                      url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                    },
                    {
                      type: 'icon',
                      url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png'
                    },
                    {
                      type: 'text',
                      text: '4.0',
                      color: '#a9a9a9'
                    }
                  ],
                  spacing: 'xs'
                },
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'box',
                      layout: 'baseline',
                      contents: [
                        {
                          type: 'text',
                          text: '¥62,000',
                          color: '#ffffff',
                          size: 'md',
                          flex: 0,
                          align: 'end'
                        }
                      ],
                      flex: 0,
                      spacing: 'lg'
                    }
                  ]
                }
              ],
              spacing: 'xs'
            }
          ],
          position: 'absolute',
          offsetBottom: '0px',
          offsetStart: '0px',
          offsetEnd: '0px',
          paddingAll: '20px'
        }
      ],
      paddingAll: '0px'
    }
  }
}
