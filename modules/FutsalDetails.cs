using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FutsalAPI.modules
{
    public class FutsalDetail
    {
        [Key]
        public int FutsalId { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; } = "";

        [Column(TypeName = "nvarchar(200)")]
        public string Location { get; set; } = "";

        [Column(TypeName = "nvarchar(15)")]
        public string ContactNumber { get; set; } = "";

        [Column(TypeName = "nvarchar(100)")]
        public string Email { get; set; } = "";

        [Column(TypeName = "nvarchar(500)")]
        public string Description { get; set; } = "";
    }
}
