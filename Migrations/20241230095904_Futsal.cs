using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FutsalAPI.Migrations
{
    /// <inheritdoc />
    public partial class Futsal : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FutsalDetail",
                columns: table => new
                {
                    FutsalId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Location = table.Column<string>(type: "nvarchar(200)", nullable: false),
                    ContactNumber = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(500)", nullable: false),
                    Pricing = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    OperationHours = table.Column<string>(type: "nvarchar(15)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FutsalDetail", x => x.FutsalId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FutsalDetail");
        }
    }
}
