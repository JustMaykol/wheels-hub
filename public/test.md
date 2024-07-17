## back-end

| Funcion            | Descripción                                                                                                                        |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------|
| web-scrap-sismo    | Hacer un web-scrap de la fuente externa de sismos, en caso exista un evento lo envia a `event-queue`                               |
| web-scrap-incendio | Hacer un web-scrap de la fuente externa de incendios, en caso exista un evento lo envia a `event-queue`                            |
| enviar-alerta      | Esta funcion consulta a `t_clients` si el cliente cuenta con una poliza activa, en caso tenga una activa, lo envia a `topic-event` |
| insertar-evento    | Esta funcion inserta el evento en la tabla de `t_events`                                                                           |

## front-end

| Funcion         | Descripción                                                     |
|-----------------|-----------------------------------------------------------------|
| registro-poliza | Esta funcion crea un registro de poliza en la tabla `t_clients` |

## otros

| Otros Componentes | Descripción                                                                                                                         |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| event-queue (SQS) | Esta queue recive los web-scrapings y los envia a `enviar-alarma`, en caso no exista respuesta lo envia a una dlq `dlq-event-queue` |
| topic-event (SNS) | Este topic recive los eventos de `enviar-alarma` y los envia a `insertar-evento` y envia un correo al cliente de la poliza.         |
| dlq-event-queue   | Esta dead letter queue recive los eventos que no se pudieron enviar a `enviar-alarma` y los envia a un correo del administrador.    |


