using Microsoft.EntityFrameworkCore.Migrations;

namespace PetPass.Migrations
{
    public partial class M26 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "IdadePet",
                table: "MeusPets",
                type: "int",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AddColumn<int>(
                name: "IdadePet2",
                table: "MeusPets",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IdadePet2",
                table: "MeusPets");

            migrationBuilder.AlterColumn<decimal>(
                name: "IdadePet",
                table: "MeusPets",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }
    }
}
