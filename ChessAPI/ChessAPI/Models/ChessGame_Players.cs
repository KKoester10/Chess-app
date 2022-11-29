namespace ChessAPI.Models
{
    public class ChessGame_Players
    {
        // ChessGame Properties
        public int Id { get; set; }
        public int GameId { get; set; }
        public ChessGame ChessGame { get; set; }

        // Player Properties
        public int WhiteId { get; set; }
        public User UserWhite { get; set; }
        public int BlackId { get; set; }
        public User UserBlack { get; set; }
    }
}
