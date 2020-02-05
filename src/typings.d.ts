/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare var $ENV: Env;
interface Env {
  ENVIRONMENT: string;
  API_URL: string;
}
