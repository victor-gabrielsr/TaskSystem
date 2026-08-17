using CadastroTarefas.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CadastroTarefas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TarefasController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        //Instância de IConfiguration para carregar o appsettings.json em mémoria
        IConfiguration configuration = new ConfigurationBuilder()
        .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
        .AddJsonFile("appsettings.json")
        .Build();

        public TarefasController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("Salvar")]
        public object Salvar([FromBody] Tarefas Tarefas)
        {
            try
            {
                _context.Tarefas.Add(Tarefas);
                _context.SaveChanges();
            }
            catch(Exception ex)
            {

            }
            return null;
        }

        [HttpDelete("Excluir")]
        public object Excluir(int IdTarefa)
        {
            try
            {

            }
            catch(Exception ex)
            {

            }
            return null;
        }
         
        [HttpGet("Listar")]
        public object Listar()
        {
            try
            {

            }
            catch(Exception ex)
            {

            }
            return null;
        }
    }
}
