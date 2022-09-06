export default function ({ $auth, $axios }) {
    console.log('in mienem plugin')
    // $auth.strategies.oidc.options.clientId = '9d31980c-dfff-4d9b-b063-d5cbbc13ad74';
    // $auth.strategies.oidc.options.clientSecret = '36XvDM5d-0ZLDicYqCsF8HHjWRZPV73v9QZGHrKH3Ek';
    //$auth.redirect = {login: 'https://kundea.20.232.216.243.nip.io/sdsd'};


  //   $auth.strategies.oidc.options.endpoints = {
  //     configuration: 'https://auth.20.232.216.243.nip.io/.well-known/openid-configuration/515b6e7d-e4ad-4c64-b5be-805584a3798f',
  //     logout: 'https://kundeA.20.232.216.243.nip.io/'

  // };
   
    // const domain = 'some.customdomain.com' // retrieved from database
  
    // $axios.setBaseURL(domain)
  
    // console.log($auth.loggedIn);
    //  const endpoints = $auth.strategies.oidc;
  
    //  for (const key in endpoints) {
    //    console.log(endpoints[key]);
    //  }
  }