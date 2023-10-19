namespace AppAvaliacaoAPI.Models
{
    public class Produtos
    {
        public int Id { get; set; }
        public string Codigo { get; set; } = string.Empty;
        public string Nome { get; set; } = string.Empty;
        public string Estoque { get; set; } = string.Empty;
        
        public Categorias? Categoria;
    }
}
