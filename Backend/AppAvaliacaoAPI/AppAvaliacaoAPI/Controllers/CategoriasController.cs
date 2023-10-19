using AppAvaliacaoAPI.Data;
using AppAvaliacaoAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AppAvaliacaoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriasController : ControllerBase
    {
        private readonly DataContext _context;  

        public CategoriasController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Categorias>>> GetProdutos()
        {
            return Ok(await _context.Categorias.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Categorias>>> CreateCategorias(Categorias categoria)
        {
            _context.Categorias.Add(categoria);
            await _context.SaveChangesAsync();

            return Ok(await _context.Categorias.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Categorias>>> UpdateProdutos(Categorias categoria)
        {
            var dbCategoria = await _context.Categorias.FindAsync(categoria.Id);
            if (dbCategoria == null)
                return BadRequest("Categoria não encontrada!");

            dbCategoria.Nome = categoria.Nome;

            await _context.SaveChangesAsync();

            return Ok(await _context.Categorias.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Categorias>>> DeleteProdutos(int id)
        {
            var dbCategoria = await _context.Categorias.FindAsync(id);
            if (dbCategoria == null)
                return BadRequest("Categoria não encontrada!");

            _context.Categorias.Remove(dbCategoria);
            await _context.SaveChangesAsync();

            return Ok(await _context.Categorias.ToListAsync());
        }
    }
}
