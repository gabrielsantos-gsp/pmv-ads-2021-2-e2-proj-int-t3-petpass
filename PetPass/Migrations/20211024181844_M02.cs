using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PetPass.Migrations
{
    public partial class M02 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MeusPets",
                columns: table => new
                {
                    IdPet = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomePet = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TipoPet = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RacaPet = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SexoPet = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IdadePet = table.Column<double>(type: "float", nullable: false),
                    PesoPet = table.Column<int>(type: "int", nullable: false),
                    DataNascPet = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DataRegPet = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FotoPet = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MeusPets", x => x.IdPet);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MeusPets");
        }
    }
}
