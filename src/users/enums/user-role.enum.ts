import { registerEnumType } from "@nestjs/graphql";

export enum userRole {
    ADMIN = "ADMIN",
    USER = "USER" 
}
registerEnumType(userRole,{ name: "userRole",description: 'possible user role !' })