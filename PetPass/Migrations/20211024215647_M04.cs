using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PetPass.Migrations
{
    public partial class M04 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "TipoPet",
                table: "MeusPets",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "SexoPet",
                table: "MeusPets",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "PesoPet",
                table: "MeusPets",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<decimal>(
                name: "IdadePet",
                table: "MeusPets",
                type: "decimal(18,1)",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.CreateTable(
                name: "MinhasVacinas",
                columns: table => new
                {
                    IdVac = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Animal = table.Column<int>(type: "int", nullable: false),
                    Descricao = table.Column<int>(type: "int", nullable: false),
                    Idade_Aplicacao = table.Column<int>(type: "int", nullable: false),
                    Data_Aplicacao = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Dose_Aplicada = table.Column<int>(type: "int", nullable: false),
                    PetId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MinhasVacinas", x => x.IdVac);
                    table.ForeignKey(
                        name: "FK_MinhasVacinas_MeusPets_PetId",
                        column: x => x.PetId,
                        principalTable: "MeusPets",
                        principalColumn: "IdPet",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MinhasVacinas_PetId",
                table: "MinhasVacinas",
                column: "PetId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MinhasVacinas");

            migrationBuilder.AlterColumn<string>(
                name: "TipoPet",
                table: "MeusPets",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "SexoPet",
                table: "MeusPets",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "PesoPet",
                table: "MeusPets",
                type: "int",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AlterColumn<double>(
                name: "IdadePet",
                table: "MeusPets",
                type: "float",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,1)");
        }
    }
}
