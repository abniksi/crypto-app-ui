import React  from 'react';
import FooterNPM from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';

function Footer() {
    return(
        <FooterNPM
        columns={[
          {
            icon: (
              <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
            ),
            title: 'Source Code',
            description: '',
            openExternal: true,
            backgroundColor: '#FFFF00',
            items: [{
              title: 'Github Repo',
              url: 'https://github.com/abniksi/crypto-app-ui',
              openExternal: true,
            }]
          },
          {
            icon: (
              <img src="https://cdn3.iconfinder.com/data/icons/social-media-circle-flat-1/1024/share-01-01-512.png" />
            ),
            title: 'My Socials',
            description: '',
            openExternal: true,
            backgroundColor: '#FFFF00',
            items: [{
              title: 'LinkedIn',
              url: 'https://www.linkedin.com/public-profile/in/bradenniksich',
              openExternal: true,
            },
            {
              title: 'Github',
              url: 'https://github.com/abniksi',
              openExternal: true,
            },
            {
              title: 'Twitter',
              url: 'https://twitter.com/bniksich31?lang=en',
              openExternal: true,
            }]
          },
        ]}
        bottom="Made with ❤️ by Braden Niksich"
      />
    )
    
}

export default Footer