using AppAvaliacaoAPI.Data;
using AppAvaliacaoAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AppAvaliacaoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutosController : ControllerBase
    {
        private readonly DataContext _context;  

        public ProdutosController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Produtos>>> GetProdutos()
        {
            return Ok(await _context.Produtos.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Produtos>>> CreateCategorias(Produtos produto)
        {
            _context.Produtos.Add(produto);
            await _context.SaveChangesAsync();

            return Ok(await _context.Produtos.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Produtos>>> UpdateProdutos(Produtos produto)
        {
            var dbProduto = await _context.Produtos.FindAsync(produto.Id);
            if (dbProduto == null)
                return BadRequest("Produto não encontrado!");

            dbProduto.Nome    = produto.Nome;
            dbProduto.Codigo  = produto.Codigo;
            dbProduto.Estoque = produto.Estoque;

            await _context.SaveChangesAsync();

            return Ok(await _context.Produtos.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Produtos>>> DeleteProdutos(int id)
        {
            var dbProduto = await _context.Produtos.FindAsync(id);
            if (dbProduto == null)
                return BadRequest("Produto não encontrado!");

            _context.Produtos.Remove(dbProduto);
            await _context.SaveChangesAsync();

            return Ok(await _context.Produtos.ToListAsync());
        }
    }
}
