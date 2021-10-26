using Microsoft.EntityFrameworkCore.Migrations;

namespace PetPass.Migrations
{
    public partial class M18 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MinhasVacinas_MeusPets_PetId",
                table: "MinhasVacinas");

            migrationBuilder.DropIndex(
                name: "IX_MinhasVacinas_PetId",
                table: "MinhasVacinas");

            migrationBuilder.AddColumn<int>(
                name: "IdPet",
                table: "MinhasVacinas",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_MinhasVacinas_IdPet",
                table: "MinhasVacinas",
                column: "IdPet");

            migrationBuilder.AddForeignKey(
                name: "FK_MinhasVacinas_MeusPets_IdPet",
                table: "MinhasVacinas",
                column: "IdPet",
                principalTable: "MeusPets",
                principalColumn: "IdPet",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MinhasVacinas_MeusPets_IdPet",
                table: "MinhasVacinas");

            migrationBuilder.DropIndex(
                name: "IX_MinhasVacinas_IdPet",
                table: "MinhasVacinas");

            migrationBuilder.DropColumn(
                name: "IdPet",
                table: "MinhasVacinas");

            migrationBuilder.CreateIndex(
                name: "IX_MinhasVacinas_PetId",
                table: "MinhasVacinas",
                column: "PetId");

            migrationBuilder.AddForeignKey(
                name: "FK_MinhasVacinas_MeusPets_PetId",
                table: "MinhasVacinas",
                column: "PetId",
                principalTable: "MeusPets",
                principalColumn: "IdPet",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
