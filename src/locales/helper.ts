export function composeLocaleMessage<Message extends Object>(
  name: string,
  localeModule: Message,
): {
  name: string;
  message: Message;
} {
  return {
    name,
    message: compose<Message>(localeModule),
  };
}

function compose<Message extends Object>(localeModule: Message) {
  const message = {};
  Object.keys(localeModule).forEach((key) => {
    // @ts-ignore
    const module = localeModule[key];
    if (module.default) {
      Object.assign(message, module.default);
    }
  });
  return message as Message;
}
