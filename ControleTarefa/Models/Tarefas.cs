using System;
using System.Collections.Generic;
using System.Text;

namespace ControleTarefa.Models
{
    public class Tarefas
    {
        public int IdTarefa { get; set; }
        public string NomeTarefa { get; set; }
        public string Descricao { get; set; }
        public DateTime DataTarefa { get; set; }
        public int Propriedades { get; set; }
        public string Responsavel { get; set; }
    }
}
