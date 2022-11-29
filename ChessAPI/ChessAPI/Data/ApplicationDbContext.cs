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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = 1,
                    UserName = "TestUserName1",
                    FirstName = "TestFirst1",
                    LastName = "TestFirst1",
                    Password = "Password1",
                    Email = "test1@test.com",
                    CreatedDate = DateTime.Now
                },
                new User
            {
                Id = 2,
                UserName = "TestUserName2",
                FirstName = "TestFirst2",
                LastName = "TestFirst2",
                Password = "Password2",
                Email = "test2@test.com",
                CreatedDate = DateTime.Now
            }
            );
        }
    }
}
