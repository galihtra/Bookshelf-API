import HAPI from '@hapi/hapi';
import routes from "./routes.mjs";

const init = async () => {
    const server = await HAPI.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);

    await server.start();
    console.log(`Server running at ${server.info.uri}`);
}

init();