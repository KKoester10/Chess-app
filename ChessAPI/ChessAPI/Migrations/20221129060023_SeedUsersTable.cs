using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChessAPI.Migrations
{
    public partial class SeedUsersTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "CreatedDate", "Email", "FirstName", "LastName", "Password", "UserName" },
                values: new object[] { 1, new DateTime(2022, 11, 28, 23, 0, 23, 101, DateTimeKind.Local).AddTicks(894), "test1@test.com", "TestFirst1", "TestFirst1", "Password1", "TestUserName1" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "CreatedDate", "Email", "FirstName", "LastName", "Password", "UserName" },
                values: new object[] { 2, new DateTime(2022, 11, 28, 23, 0, 23, 101, DateTimeKind.Local).AddTicks(926), "test2@test.com", "TestFirst2", "TestFirst2", "Password2", "TestUserName2" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
