using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChessAPI.Migrations
{
    public partial class AddChessGamesRelation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ProfilePic",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "ChessGames",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    WhiteId = table.Column<int>(type: "int", nullable: false),
                    BlackId = table.Column<int>(type: "int", nullable: false),
                    Win = table.Column<bool>(type: "bit", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChessGames", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ChessGames_Users_BlackId",
                        column: x => x.BlackId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ChessGames_Users_WhiteId",
                        column: x => x.WhiteId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedDate", "ProfilePic" },
                values: new object[] { new DateTime(2022, 11, 29, 8, 23, 22, 114, DateTimeKind.Local).AddTicks(4245), "../../chessboard-app/src/components/images/Profile_Pics/godmode.jpg" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedDate", "ProfilePic" },
                values: new object[] { new DateTime(2022, 11, 29, 8, 23, 22, 114, DateTimeKind.Local).AddTicks(4278), "../../chessboard-app/src/components/images/Profile_Pics/JacobKresak.jpg" });

            migrationBuilder.CreateIndex(
                name: "IX_ChessGames_BlackId",
                table: "ChessGames",
                column: "BlackId");

            migrationBuilder.CreateIndex(
                name: "IX_ChessGames_WhiteId",
                table: "ChessGames",
                column: "WhiteId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ChessGames");

            migrationBuilder.DropColumn(
                name: "ProfilePic",
                table: "Users");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2022, 11, 28, 23, 0, 23, 101, DateTimeKind.Local).AddTicks(894));

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2022, 11, 28, 23, 0, 23, 101, DateTimeKind.Local).AddTicks(926));
        }
    }
}
