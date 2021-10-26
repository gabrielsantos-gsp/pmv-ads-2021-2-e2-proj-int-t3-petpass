using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PetPass.Models
{
    [Table("MinhasVacinas")]
    public class Vacina
    {
        [Key]
        public int IdVac { get; set; }

        [Display(Name = "Tipo de Animal")]
        [Required(ErrorMessage = "É obrigatório selecionar o tipo do Animal.")]
        public TipoAnimal Animal { get; set; }

        [Display(Name = "Nome da Vacina")]
        [Required(ErrorMessage = "É obrigatório selecionar a vacina aplicada.")]
        public TipoVacina Descricao { get; set; }

        [Display(Name = "Idade de Aplicação (semanas)")]
        [Required(ErrorMessage = "É obrigatório selecionar a idade de aplicação da vacina.")]
        public IdadeSemanas Idade_Aplicacao { get; set; }

        [Display(Name = "Data da Aplicação")]
        [Required(ErrorMessage = "É obrigatório informar a data de aplicação da vacina.")]
        public DateTime Data_Aplicacao { get; set; }

        [Display(Name = "Dose Aplicada")]
        [Required(ErrorMessage = "É obrigatório selecionar o tipo de dose aplicada.")]
        public DoseAplic Dose_Aplicada { get; set; }

        [Display(Name = "Pet")]
        [Required(ErrorMessage = "É obrigatório informar o Pet.")]
        public int PetId { get; set; }

        [ForeignKey("PetId")]
        public Pet Pet { get; set; }

    }

    public enum TipoAnimal
    {
        Cao,
        Gato
    }

    public enum TipoVacina
    {
                V8,
                V10,
                Gripe_Canina,
                Giardiase,
                Antirrabica,
                Quadrupla_Felina
    }

    public enum IdadeSemanas
    {
        de_6_a_8_semanas,
        _12_semanas,
        _16_semanas

    }
    public enum DoseAplic
    {
        Primeira,
        Segunda,
        Terceira,
        Reforco
    }
}
