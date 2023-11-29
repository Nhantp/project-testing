package com.example.a0922i1projectmobilephone.repository.product;


import com.example.a0922i1projectmobilephone.dto.output_invoice.ProductDTO;
import com.example.a0922i1projectmobilephone.dto.output_invoice.ProductResponseDTO;

import com.example.a0922i1projectmobilephone.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import javax.transaction.Transactional;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "SELECT p.* FROM Product p JOIN Brand b ON p.brand_id = b.brand_id where p.delete_flag=0",
            countQuery = "SELECT p.* FROM Product p JOIN Brand b ON p.brand_id = b.brand_id where p.delete_flag=0",
            nativeQuery = true)
    Page<Product> findAllProducts(Pageable pageable);
    @Query(value = "SELECT p.* FROM Product p JOIN Brand b ON p.brand_id = b.brand_id where p.delete_flag=0 and p.is_publish=1",
            countQuery = "SELECT p.* FROM Product p JOIN Brand b ON p.brand_id = b.brand_id where p.delete_flag=0 and p.is_publish=1",
            nativeQuery = true)
    Page<Product> findAllProductForSaleScreen(Pageable pageable);

    @Query(value = "SELECT p.* FROM Product p where p.product_id =:productId and p.delete_flag=0",
            nativeQuery = true)
    Product findProductById(@Param("productId") Integer productId);

    @Modifying
    @Transactional
    @Query(value = "UPDATE Product p set p.delete_flag =1  where p.product_id =:productId",
            nativeQuery = true)
    void deleteProductById(@Param("productId") Integer productId);

    @Query(value = "SELECT p.* FROM Product p JOIN Brand b ON p.brand_id = b.brand_id " +
            "WHERE (b.brand_name = :brandName or :brandName is null)" +
            "AND p.selling_price_product >= :minPrice " +
            "AND p.selling_price_product <= :maxPrice " +
            "AND (p.name_product LIKE CONCAT('%', :productName, '%') or :productName is null)" +
            "AND (p.product_cpu_product LIKE CONCAT('%', :productCpu, '%') or :productCpu is null)" +
            "and (p.delete_flag = 0)",
            countQuery = "SELECT p.* FROM Product p " +
                    "JOIN Brand b ON p.brand_id = b.brand_id " +
                    "WHERE (b.brand_name = :brandName or :brandName is null)" +
                    "AND p.selling_price_product >= :minPrice " +
                    "AND p.selling_price_product <= :maxPrice " +
                    "AND (p.name_product LIKE CONCAT('%', :productName, '%') or :productName is null)" +
                    "AND (p.product_cpu_product LIKE CONCAT('%', :productCpu, '%') or :productCpu is null)" +
                    "and (p.delete_flag = 0)",
            nativeQuery = true)
    Page<Product> searchProducts(@Param("brandName") String brandName,
                                 @Param("minPrice") Double minPrice,
                                 @Param("maxPrice") Double maxPrice,
                                 @Param("productName") String productName,
                                 @Param("productCpu") String productCpu,
                                 Pageable pageable);

    @Query(value = "SELECT p.* FROM Product p JOIN Brand b ON p.brand_id = b.brand_id " +
            "WHERE (b.brand_name = :brandName or :brandName is null)" +
            "AND (p.name_product LIKE CONCAT('%', :productName, '%') or :productName is null)" +
            "AND (p.product_cpu_product LIKE CONCAT('%', :productCpu, '%') or :productCpu is null)" +
            "and (p.delete_flag = 0)",
            countQuery = "SELECT p.* FROM Product p " +
                    "JOIN Brand b ON p.brand_id = b.brand_id " +
                    "WHERE (b.brand_name = :brandName or :brandName is null)" +
                    "AND (p.name_product LIKE CONCAT('%', :productName, '%') or :productName is null)" +
                    "AND (p.product_cpu_product LIKE CONCAT('%', :productCpu, '%') or :productCpu is null)" +
                    "and (p.delete_flag = 0)",
            nativeQuery = true)
    Page<Product> searchProducts(@Param("brandName") String brandName,
                                 @Param("productName") String productName,
                                 @Param("productCpu") String productCpu,
                                 Pageable pageable);

    @Query(value = "SELECT p.* FROM Product p JOIN Brand b ON p.brand_id = b.brand_id " +
            "WHERE (b.brand_name = :brandName or :brandName is null)" +
            "AND p.selling_price_product >= :minPrice " +
            "AND p.selling_price_product <= :maxPrice " +
            "AND (p.name_product LIKE CONCAT('%', :productName, '%') or :productName is null)" +
            "AND (p.product_cpu_product LIKE CONCAT('%', :productCpu, '%') or :productCpu is null)" +
            "and (p.delete_flag = 0)" +
            "and (p.is_publish = 1)",
            countQuery = "SELECT p.* FROM Product p " +
                    "JOIN Brand b ON p.brand_id = b.brand_id " +
                    "WHERE (b.brand_name = :brandName or :brandName is null)" +
                    "AND p.selling_price_product >= :minPrice " +
                    "AND p.selling_price_product <= :maxPrice " +
                    "AND (p.name_product LIKE CONCAT('%', :productName, '%') or :productName is null)" +
                    "AND (p.product_cpu_product LIKE CONCAT('%', :productCpu, '%') or :productCpu is null)" +
                    "and (p.delete_flag = 0)" +
            "and (p.is_publish = 1)",
            nativeQuery = true)
    Page<Product> searchProductForSaleScreen(@Param("brandName") String brandName,
                                 @Param("minPrice") Double minPrice,
                                 @Param("maxPrice") Double maxPrice,
                                 @Param("productName") String productName,
                                 @Param("productCpu") String productCpu,
                                 Pageable pageable);

    @Query(value = "SELECT p.* FROM Product p JOIN Brand b ON p.brand_id = b.brand_id " +
            "WHERE (b.brand_name = :brandName or :brandName is null)" +
            "AND (p.name_product LIKE CONCAT('%', :productName, '%') or :productName is null)" +
            "AND (p.product_cpu_product LIKE CONCAT('%', :productCpu, '%') or :productCpu is null)" +
            "and (p.delete_flag = 0)" +
            "and (p.is_publish = 1)",
            countQuery = "SELECT p.* FROM Product p " +
                    "JOIN Brand b ON p.brand_id = b.brand_id " +
                    "WHERE (b.brand_name = :brandName or :brandName is null)" +
                    "AND (p.name_product LIKE CONCAT('%', :productName, '%') or :productName is null)" +
                    "AND (p.product_cpu_product LIKE CONCAT('%', :productCpu, '%') or :productCpu is null)" +
                    "and (p.delete_flag = 0)" +
                    "and (p.is_publish =1)",
            nativeQuery = true)
    Page<Product> searchProductForSaleScreen(@Param("brandName") String brandName,
                                 @Param("productName") String productName,
                                 @Param("productCpu") String productCpu,
                                 Pageable pageable);

    @Query(value = "select *  " +
            " from product " +
            "WHERE\n" +
            "    (\n" +
            "        (:option = 'name' AND name_product LIKE %:search%) OR\n" +
            "        (:option = 'cost' AND cost_product  = :search) OR\n" +
            "        (:option = 'cpu' AND product_cpu LIKE %:search%)\n" +
            "    )\n" +
            "    OR :isAll = 1" +
            "    OR product_storage LIKE %:storage%\n", nativeQuery = true)
    Page<Product> listProduct(Pageable pageable,
                              @Param("option") String option,
                              @Param("search") String search,
                              @Param("storage") String storage,
                              @Param("isAll") int isAll);
    @Query(value = "select * from product  where product_id = ?1", nativeQuery = true)
    Product findById(int id);

    /**
     * NhanTP
     * Select Product
     */
    @Query(value = "SELECT product_id, selling_price_product, quantity_product FROM product WHERE product_id = ?1", nativeQuery = true)
    ProductResponseDTO findProductDTOById(Integer productId);
    /**
     * NhanTP
     * Update Quantity Product
     */
    @Modifying
    @Transactional
    @Query(value = "UPDATE product SET quantity_product = :quantity WHERE product_id = :productId", nativeQuery = true)
    void updateProduct(@Param("productId") Integer productId, @Param("quantity") Integer quantity);

    @Query(value = "SELECT quantity_product FROM Product WHERE product_id = ?1", nativeQuery = true)
    Integer findQuantityById(Integer productId);


}
