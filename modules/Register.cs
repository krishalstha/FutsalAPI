﻿using System;
namespace FutsalAPI.Models
{
    public class Register
    {
        public int Id { get; set; }
        public int roleId { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
    }
}
