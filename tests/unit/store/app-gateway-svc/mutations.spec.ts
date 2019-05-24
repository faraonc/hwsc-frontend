import { mutations } from '@/store/modules/app-gateway-svc/mutations';
import { state } from '@/store/modules/app-gateway-svc/states';
import * as mutation from '@/store/modules/app-gateway-svc/types-mutations';
import * as types from '@/store/root-types';

describe(mutation.SET_HTTP_HEADER, () => {
  const { SET_HTTP_HEADER } = mutations;

  it('should equal to payload', () => {
    const hostname: string = 'test-address';
    SET_HTTP_HEADER(state, hostname);
    expect(state.httpHeader).toEqual(hostname);
  });
});

// https://github.com/grpc/grpc-web/pull/540
// need to wait for next release for grpc-web
describe(mutation.SET_GRPC_CLIENT, () => {
  const { SET_GRPC_CLIENT } = mutations;

  it('should equal to AppGatewayServiceClient object', () => {
    let hostname: string | undefined = process.env.VUE_APP_HOST_NAME;
    hostname = hostname == null ? '' : hostname;
    const client: types.AppGatewayServiceClient = new types.AppGatewayServiceClient(hostname, null, null);

    SET_GRPC_CLIENT(state, client);
    expect(state.httpHeader).toEqual(client);
  });
});