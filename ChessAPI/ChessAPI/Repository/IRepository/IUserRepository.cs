using ChessAPI.Models;
using System.Linq.Expressions;

namespace ChessAPI.Repository.IRepository
{
    public interface IUserRepository : IRepository<User>
    {
        Task<User> UpdateAsync(User entity);
    }
}
