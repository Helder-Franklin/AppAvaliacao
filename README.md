# Sistema web para cadastro de Categoria e Produto
Implementação de CRUD utilizando C# .NET 6 e Angular, banco de dados MySQL criado a partir de migração pelo Entity Framework.

```sh
dotnet ef database update
```

### Abaixo script gerado pela migração:

info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (4ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      CREATE DATABASE `CRUD_AVALIACAO`;
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (20ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      CREATE TABLE `__EFMigrationsHistory` (
          `MigrationId` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
          `ProductVersion` varchar(32) CHARACTER SET utf8mb4 NOT NULL,
          CONSTRAINT `PK___EFMigrationsHistory` PRIMARY KEY (`MigrationId`)
      ) CHARACTER SET=utf8mb4;
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (15ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='CRUD_AVALIACAO' AND TABLE_NAME='__EFMigrationsHistory';
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (5ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT `MigrationId`, `ProductVersion`
      FROM `__EFMigrationsHistory`
      ORDER BY `MigrationId`;
info: Microsoft.EntityFrameworkCore.Migrations[20402]
      Applying migration '20231018145019_Criacao'.
Applying migration '20231018145019_Criacao'.
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (2ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      ALTER DATABASE CHARACTER SET utf8mb4;
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (10ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      CREATE TABLE `Categorias` (
          `Id` int NOT NULL AUTO_INCREMENT,
          `Nome` longtext CHARACTER SET utf8mb4 NOT NULL,
          CONSTRAINT `PK_Categorias` PRIMARY KEY (`Id`)
      ) CHARACTER SET=utf8mb4;
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (11ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      CREATE TABLE `Produtos` (
          `Id` int NOT NULL AUTO_INCREMENT,
          `Codigo` longtext CHARACTER SET utf8mb4 NOT NULL,
          `Nome` longtext CHARACTER SET utf8mb4 NOT NULL,
          `Estoque` longtext CHARACTER SET utf8mb4 NOT NULL,
          CONSTRAINT `PK_Produtos` PRIMARY KEY (`Id`)
      ) CHARACTER SET=utf8mb4;

