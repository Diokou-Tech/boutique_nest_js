import { createParamDecorator, SetMetadata } from '@nestjs/common';

// export const CurrentUser = (...args: string[]) => SetMetadata('current-user', args);
export const current_user = createParamDecorator(
  (pick: string, context: any) => {
    const user = context.args[0].user;
    return pick ? pick[pick] :  user;
  },
);
