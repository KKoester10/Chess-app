namespace ChessAPI.Models
{
    public class ChessGame
    {
        public int Id { get; set; }
        public User Winner { get; set; }
        public User Loser { get; set; }
        public List<string> MoveHistory {get; set; }
        public DateTime CreatedDate { get; set; }

        // Navigation Properties
        public List<ChessGame_Players> ChessGame_Players { get; set; }

    }
}
