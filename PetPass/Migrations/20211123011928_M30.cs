using Microsoft.EntityFrameworkCore.Migrations;

namespace PetPass.Migrations
{
    public partial class M30 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MeusPets_Usuarios_UsuarioId",
                table: "MeusPets");

            migrationBuilder.DropColumn(
                name: "FotoPet",
                table: "MeusPets");

            migrationBuilder.AlterColumn<int>(
                name: "UsuarioId",
                table: "MeusPets",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_MeusPets_Usuarios_UsuarioId",
                table: "MeusPets",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "IdUsuario",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MeusPets_Usuarios_UsuarioId",
                table: "MeusPets");

            migrationBuilder.AlterColumn<int>(
                name: "UsuarioId",
                table: "MeusPets",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<string>(
                name: "FotoPet",
                table: "MeusPets",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_MeusPets_Usuarios_UsuarioId",
                table: "MeusPets",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "IdUsuario",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
