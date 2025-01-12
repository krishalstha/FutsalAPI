﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FutsalAPI.Migrations
{
    /// <inheritdoc />
    public partial class futsal : Migration
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
                    futsalName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    location = table.Column<string>(type: "nvarchar(200)", nullable: false),
                    contactNumber = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    description = table.Column<string>(type: "nvarchar(500)", nullable: false),
                    pricing = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    operationHours = table.Column<string>(type: "nvarchar(15)", nullable: false)
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
