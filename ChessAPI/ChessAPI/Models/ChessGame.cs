namespace ChessAPI.Models
{
    public class ChessGame
    {
        public int Id { get; set; }
        public User White { get; set; }
        public User Black { get; set; }
        public List<string> MoveHistory {get; set; }

    }
}
