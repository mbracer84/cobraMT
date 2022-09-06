import { OpenIDConnectScheme } from '@nuxtjs/auth-next/dist/runtime.js'

export default class RuntimeConfigurableOpenIDConnectScheme extends OpenIDConnectScheme {
  constructor($auth, options) {

    //var ttt = $http.$get('https://api.dev-cobra.de/v1/auth/config?host=kundea')

    console.log("IS AUTHENTICATED?: " + $auth.loggedIn);
    var host
    if($auth.ctx.req!= null)
      {
        host=$auth.ctx.req.headers.host
        console.log("In my CustomAuthSchema (SSR): " + host)
      }
    else
    {
      host=window.location.host
      console.log("In my CustomAuthSchema (Local): " + host)
    }

  var myRegexp = new RegExp("https:\/\/([a-zA-Z0-9]+)", "g");
  var match = myRegexp.exec(host);
  
  if(match == null)
    host = "kundea"
  else
    host = match[1]
  
    console.log("found: " + host);

      if(host.startsWith('kundea') || host.startsWith('localhost'))
      {
        //$auth.options.redirect.login = 'https://kundea.my.dev-cobra.de/login';
        options.endpoints.configuration='https://login.dev-cobra.de/.well-known/openid-configuration/75e5750d-ac1c-4ded-a9c0-6dfc52954d2a'
        options.endpoints.logout = 'https://kundea.my.dev-cobra.de/'
        options.clientId= '0c4477e6-1da7-484d-8ec0-e29fbf70afae'
      }
      else if(host.startsWith('kundeb'))
      {
        //$auth.options.redirect.login = 'https://kundeb.my.dev-cobra.de/login';
        options.endpoints.configuration='https://login.dev-cobra.de/.well-known/openid-configuration/3de7079d-22c7-4c47-8416-731e6e6b0def'
        options.endpoints.logout = 'https://kundeb.my.dev-cobra.de/'
        options.clientId= 'b6c81f68-5c3e-446b-a0fc-92edf9231332'
      }
  

    
super($auth, options)

  }


}