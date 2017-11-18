import axios from 'axios';

export default (reqOpts) => {
  const { body, params, url } = reqOpts;
  let { method } = reqOpts;
  let reqData;

  if( url ){
    const reqArgs = [url];

    // Default to GET if nothing was passed
    if( !method ) method = 'GET';
    // GETs require a `params` prop
    if( params ) reqData = { params };
    // POSTs take whatever Object is passed
    if( body ) reqData = body;
    // only add data to the call if it was provided
    if( reqData ) reqArgs.push(reqData);

    return axios[method.toLowerCase()].apply(null, reqArgs);
  }
}
