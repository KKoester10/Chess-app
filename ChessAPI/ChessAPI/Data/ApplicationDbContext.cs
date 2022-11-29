using ChessAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace ChessAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<ChessGame> ChessGames { get; set; }
        public DbSet<ChessGame_Players> ChessGame_Players { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ChessGame_Players>()
                .HasOne(c => c.ChessGame)
                .WithMany(cp => cp.ChessGame_Players)
                .HasForeignKey(ci => ci.Id);

            modelBuilder.Entity<ChessGame_Players>()
                .HasOne(u => u.UserWhite)
                .WithMany(cp => cp.ChessGame_Players)
                .HasForeignKey(ci => ci.WhiteId);

            modelBuilder.Entity<ChessGame_Players>()
                .HasOne(u => u.UserBlack)
                .WithMany(cp => cp.ChessGame_Players)
                .HasForeignKey(ci => ci.BlackId);

            //modelBuilder.Entity<User>().HasData(
            //    new User
            //    {
            //        Id = 1,
            //        UserName = "TestUserName1",
            //        FirstName = "TestFirst1",
            //        LastName = "TestFirst1",
            //        ProfilePic = "../../chessboard-app/src/components/images/Profile_Pics/godmode.jpg",
            //        Password = "Password1",
            //        Email = "test1@test.com",
            //        CreatedDate = DateTime.Now
            //    },
            //    new User
            //    {
            //        Id = 2,
            //        UserName = "TestUserName2",
            //        FirstName = "TestFirst2",
            //        LastName = "TestFirst2",
            //        ProfilePic = "../../chessboard-app/src/components/images/Profile_Pics/JacobKresak.jpg",
            //        Password = "Password2",
            //        Email = "test2@test.com",
            //        CreatedDate = DateTime.Now
            //    }
            //    );
        }
    }
}
