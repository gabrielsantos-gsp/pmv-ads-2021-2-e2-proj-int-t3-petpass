using Microsoft.EntityFrameworkCore.Migrations;

namespace PetPass.Migrations
{
    public partial class M29 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UsuarioId",
                table: "MeusPets",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_MeusPets_UsuarioId",
                table: "MeusPets",
                column: "UsuarioId");

            migrationBuilder.AddForeignKey(
                name: "FK_MeusPets_Usuarios_UsuarioId",
                table: "MeusPets",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "IdUsuario",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MeusPets_Usuarios_UsuarioId",
                table: "MeusPets");

            migrationBuilder.DropIndex(
                name: "IX_MeusPets_UsuarioId",
                table: "MeusPets");

            migrationBuilder.DropColumn(
                name: "UsuarioId",
                table: "MeusPets");
        }
    }
}
